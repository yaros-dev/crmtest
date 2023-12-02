import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import attachment from "../../images/attachment.svg";
import { ChallengeItem } from "../challenge-item/challenge-item";
import { IChallengeLabels } from "../challenge-item/challenge-item";
import { InputChallenge } from "../challenge-input/challenge-input";
import { TextareaChallenge } from "../challenge-textarea/challenge-textarea";
import "./contact.css";

export interface IContactDataOnScreen {
  title: string;
  lableData1: string;
  lableData2: string;
  attachLable: string;
  submitBtnTitle: string;
  interestedList: IChallengeLabels[];
  budgetList: IChallengeLabels[];
}

const checkDomainExistence = async (email: string) => {
  try {
    const domain = email.split("@")[1];

    if (domain === "business.com") {
      return { status: true };
    } else {
      return { status: false, message: "Domain does not exist" };
    }
  } catch (error) {
    return { status: false, message: "Error checking domain existence" };
  }
};

const validateName = (name: string) => {
  const regex = /^[a-zA-Z]+$/;
  return regex.test(name) && name.trim() !== "";
};

export const Contact = ({
  title,
  lableData1,
  lableData2,
  attachLable,
  submitBtnTitle,
  interestedList,
  budgetList,
}: IContactDataOnScreen) => {
  let navigate = useNavigate();
  const interestedParam = localStorage.getItem("interested");

  const [interested, setInterested] = useState(interestedParam);
  const [budget, setBudget] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [values, setValues] = useState<any>({});
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const handleChange = async (name: string, value: string) => {
    if (name === "name") {
      if (!validateName(value)) {
        setErrorName("Enter the correct name");
      } else {
        setErrorName("");
      }
    }
    if (name === "email") {
      const forbiddenDomains = [
        "gmail.com",
        "yahoo.com",
        "yandex.ru",
        "icloud.com",
      ];
      const domain = value.split("@")[1];

      if (forbiddenDomains.includes(domain)) {
        setErrorEmail("Forbidden domain!");
      } else {
        const domainCheckResult: any = await checkDomainExistence(value);

        if (!domainCheckResult.status) {
          console.error(
            "Domain verification error:",
            domainCheckResult.message
          );
          setErrorEmail(domainCheckResult?.message);
        } else {
          setErrorEmail("");
          console.log("The domain exists!");
        }
      }
    }

    setValues({ ...values, [name]: value });
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files as FileList;

    setSelectedFile(file[0]);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (
      errorEmail ||
      !values.email ||
      !values.email ||
      !values.yourChallenge ||
      !interested ||
      !budget
    ) {
      return;
    }

    const data = {
      ...values,
      interested,
      budget,
      selectedFile,
    };

    console.log(data);
    localStorage.removeItem("interested");
    navigate("/success");
  };

  const firstWord = title.split(" ")[0];

  return (
    <div className="challenge__section">
      <div className="container">
        <div className="challenge__title">
          <span>{firstWord}</span> {title.replace(firstWord, "")}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="challenge__lable">{lableData1}</div>
          <div className="challenge__items">
            {interestedList?.map(({ lable, value }, i) => {
              return (
                <ChallengeItem
                  lable={lable}
                  active={interested === value}
                  key={175 + i}
                  onClick={() => {
                    setInterested(value);
                  }}
                />
              );
            })}
          </div>
          <div className="inputs">
            <InputChallenge
              error={Boolean(errorName)}
              errorText={errorName}
              onChange={(e) => {
                handleChange("name", e.target.value);
              }}
              type="name"
              placeholder="Name"
            />
            <InputChallenge
              error={Boolean(errorEmail.length)}
              errorText={errorEmail}
              onChange={(e) => {
                handleChange("email", e.target.value);
              }}
              type="email"
              placeholder="Email"
            />
            <TextareaChallenge
              onChange={(e) => {
                handleChange("yourChallenge", e.target.value);
              }}
              placeholder="Your challenge"
              value={values?.yourChallenge}
            />
          </div>
          <div className="challenge__lable">{lableData2}</div>
          <div className="challenge__items">
            {budgetList?.map(({ lable, value }, i) => {
              return (
                <ChallengeItem
                  key={34 + i}
                  lable={lable}
                  active={budget === value}
                  onClick={() => {
                    setBudget(value);
                  }}
                />
              );
            })}
          </div>
          <label className="label_file" htmlFor="fileInput">
            <div className="challenge__attachment__img">
              <img src={attachment} alt="" />
            </div>
            <input
              type="file"
              id="fileInput"
              accept=".pdf, .doc, .docx, .xls, .xlsx, .mov, .avi, .mp4, .jpg, .jpeg, .png, .csv"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <div className="challenge__attachment__text">{attachLable}</div>
          </label>
          <div className="challenge__submit">
            <button type="submit" className="challenge__btn">
              {submitBtnTitle}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
