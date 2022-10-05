const ru = {
  translation: {
    mainlink: "Hexlet chat",
    exit: "Выйти",
    loginpage: {
      noaccount: "Нету аккаунта?",
      registration: "Регистрация",
    },
    notify:{
      successAdd: "Канал успешно создан",
      errorAdd: "Ошибка при создании канала",
      successDelete: "Канал успешно удален",
      errorDelete: "Ошибка при удалении канала",
      successRename: "Канал успешно переименован",
      errorRename: "Ошибка при переименовании канала",
    },
    channels: {
      tittle: "Каналы",
      rename: "Переименовать",
      delete: "Удалить",
      send: "Отправить",
      placeholder: "Введите сообщение",
      count: "{{ count }} сообщений",
      count_one: "{{count}} сообщение",
      count_few: "{{count}} сообщения",
      count_many: "{{count}} сообщений",
    },
    loginform: {
      enter: "Войти",
      nick: "Ваш ник",
      password: "Пароль"
    },
    signupform:{
      registration:"Регистрация",
      name: "Имя пользователя",
      password: "Пароль",
      confirm: "Подтвердите пароль",
      action: "Зарегистрироваться"
    },
    validationform: {
      required: "Обязательное поле",
      min3: "Не менее 3-х символов",
      min6: "Не менее 6-х символов",
      max: "Не более 20 символов",
      errorlogin: "Неверное имя пользователя или пароль",
      errorsignup: "Пользователь с таким именем уже существует",
      uniq: "Должно быть уникальным",
      confirm: "Пароли должны совпадать",
    },
    errorpage: {
      notfound: "Страница не найдена",
      cannavigate: "Но вы можете перейти",
      tomainpage: "на главную страницу"
    },
    modals: {
      cancel: "Отменить",
      addChannel: {
        tittle: "Добавить канал",
        name: "Имя канала",
        add: "Добавить"
      },
      deleteChannel: {
        tittle: "Удалить канал",
        sure: "Уверены?",
        delete: "Удалить",
      },
      renameChannel: {
        tittle: "Переименовать канал",
        name: "Имя канала",
        rename: "Переименовать",
      },
    },
  }
}

export default ru