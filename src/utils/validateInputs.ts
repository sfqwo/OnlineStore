export const validatePatterns = {
  required: 'Это поле обязательно к заполнению',
  email: {
    value: /.+@.+\..+/i,
    message: 'Неверный формат почты',
  },
  beEqual: (value: string) => ({
    value: new RegExp(value),
    message: 'Неверное значение',
  }),
};

export const validateLimits = {
  age: {
    min: {
      value: 18,
      message: 'Возраст не может быть меньше 18',
    },
    max: {
      value: 65,
      message: 'Возраст не может быть больше 18',
    },
  },
};

export const validateMaxLength = (l: number) => {
  return {
    value: l,
    message: `Максимальная длина ${l} символов`,
  };
};

export const validateMinLength = (l: number) => {
  return {
    value: l,
    message: `Минимальная длина ${l} символа`,
  };
};
