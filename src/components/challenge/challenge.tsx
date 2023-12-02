import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate, useLocation, createSearchParams } from 'react-router-dom';
import attachment from '../../images/attachment.svg';
import { ChallengeItem } from '../challenge-item/challenge-item';
import { IChallengeLabels } from '../challenge-item/challenge-item';
import { InputChallenge } from '../challenge-input/challenge-input';
import './challenge.css';
import { applyStylesToWords } from '../../utilites/apply-styles-to-words';
import { TextareaChallenge } from '../challenge-textarea/challenge-textarea';

export interface IChallengeDataOnScreen {
  title: string;
  lableData1: string;
  lableData2: string;
  attachLable: string;
  submitBtnTitle: string;
  interestedList: IChallengeLabels[];
  budgetList: IChallengeLabels[];
}

const useSearchParams = (name:string) =>{
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const queryParamValue = searchParams.get(name);

  return queryParamValue || ''
}

const checkDomainExistence = async (email:string) => {
  try {
    const domain = email.split('@')[1];

    const response:any = await fetch(`https://api.example.com/check-domain/${domain}`);

    if (response.data.exists) {
      return { status: true };
    } else {
      return { status: false, message: 'Domain does not exist' };
    }
  } catch (error) {
    return { status: false, message: 'Error checking domain existence' };
  }
};

export const Challenge = ({
  title,
  lableData1,
  lableData2,
  attachLable,
  submitBtnTitle,
  interestedList,
  budgetList,
}: IChallengeDataOnScreen) => {
  let navigate = useNavigate();
  const interestedParam = useSearchParams('interested');
  
  const [interested, setInterested] = useState(interestedParam);
  const [budget, setBudget] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [values, setValues] = useState<any>({});
  const [errorEmail, setErrorEmail] = useState('');

  const handleChange = async  (name: string, value: string) => {
    if (name === 'email') {
      const forbiddenDomains = ['gmail.com', 'yahoo.com', 'yandex.ru', 'icloud.com'];
      const domain = value.split('@')[1];
  
      if (forbiddenDomains.includes(domain)) {
        setErrorEmail('Запрещенный домен!');
      } else {
        const domainCheckResult:any = await checkDomainExistence(value);
  
        if (!domainCheckResult.status) {
          console.error('Ошибка проверки домена:', domainCheckResult.message);
          setErrorEmail(domainCheckResult?.message);
        } else {
          console.log('Домен существует!');
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
    const data = {
      ...values,
      interested,
      budget,
      selectedFile,
    };

    console.log(data);

    navigate('/success');
  };

  const firstWord = title.split(' ')[0];

  return (
    <div className='challenge__section'>
      <div className='container'>
        <div className='challenge__title'>
          <span>{firstWord}</span> {title.replace(firstWord, '')}
        </div>
        <form onSubmit={handleSubmit}>
          <div className='challenge__lable'>{lableData1}</div>
          <div className='challenge__items'>
            {interestedList?.map(({ lable, value }, i) => {
              return (
                <ChallengeItem
                  lable={lable}
                  active={interested === value}
                  key={175 + i}
                  onClick={() => {
                    navigate({
                      pathname: "/challenge",
                      search: createSearchParams({
                        interested: value
                      }).toString()
                  });
                    setInterested(value);
                  }}
                />
              );
            })}
          </div>
          <div className='inputs'>
            <InputChallenge
              error
              errorText='Enter the correct name'
              onChange={(e) => {
                handleChange('name', e.target.value);
              }}
              type='name'
              placeholder='Name'
            />
            <InputChallenge
            error={Boolean(errorEmail.length)}
            errorText={errorEmail}
              onChange={(e) => {
                handleChange('email', e.target.value);
              }}
              type='email'
              placeholder='Email'
            />
            <TextareaChallenge
              onChange={(e) => {
                handleChange('yourChallenge', e.target.value);
              }}
              placeholder='Your challenge'
              value={values?.yourChallenge}
            />
          </div>
          <div className='challenge__lable'>{lableData2}</div>
          <div className='challenge__items'>
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
          <label className='label_file' htmlFor='fileInput'>
            <div className='challenge__attachment__img'>
              <img src={attachment} alt='' />
            </div>
            <input
              type='file'
              accept=".pdf, .doc, .docx, .xls, .xlsx, .mov, .avi, .mp4, .jpg, .jpeg, .png, .csv"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            <div className='challenge__attachment__text'>{attachLable}</div>
          </label>
          <div className='challenge__submit'>
            <button type='submit' className='challenge__btn'>
              {submitBtnTitle}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
