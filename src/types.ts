export interface IQuizChoice {
  text: string;
  value: string;
}

export interface IQuizOption {
  type: "multipleChoice";
  choices: IQuizChoice[];
}

export interface IQUizCondition {
  slug: string;
  value: string;
}

export interface IQuizQuestion {
  id: string;
  order: number;
  headingText: string;
  headingBackgroundColor: string;
  exampleText?: string;
  exampleImageSrc?: string;
  choice: IQuizOption;
  skipConditions?: IQUizCondition[];
  quizId: string;
}

export interface IQUizAnswers {
  [questionId: string]: string;
}

export interface IQuiz {
  id: string;
  quizQuestion: IQuizQuestion[];
  title: string;
}
