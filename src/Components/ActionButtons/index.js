function ActionButtons({ questionsLength, step }) {
  const isLast = questionsLength - 1 === step;

  return (
    <div>
      {step === 0 || <button>이전</button>}
      {isLast ? <button>다음</button> : <button>제출</button>}
    </div>
  );
}

export default ActionButtons;
