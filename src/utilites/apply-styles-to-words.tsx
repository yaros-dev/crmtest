export const applyStylesToWords = (
  styles: { position: number; style: React.CSSProperties }[],
  inputString: string
): React.ReactNode => {
  const words = inputString.match(/\S+|\s/g);

  if (words) {
    const updatedWords = words
      .filter((word) => word.trim() !== "")
      .map((word, index) => {
        const styleObject = styles.find((s) => s.position - 1 === index);

        if (styleObject) {
          return (
            <>
              <span style={styleObject.style} key={index + word}>
                {word}
              </span>{" "}
            </>
          );
        } else {
          return <>{word} </>;
        }
      });

    return updatedWords;
  } else {
    return inputString;
  }
};
