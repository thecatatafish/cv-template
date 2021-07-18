const data = {
  header: {
    first_name: "John",
    last_name: "Doe",
    job_title: "Software Engineer",
    profile_img_src: "https://www.w3schools.com/howto/img_avatar.png",
    description:
      "Hi👋 I'm John Doe, Sed laoreet nisi eros, non dignissim nunc tincidunt at. Nullam at elit auctor, tincidunt tellus sit amet, auctor nunc. Sed felis justo, egestas non posuere ut, scelerisque sit amet nulla. Praesent malesuada, dui non egestas convallis, odio eros scelerisque metus, non molestie libero ipsum vitae orci. Proin et diam et elit commodo bibendum. In hac habitasse platea dictumst. Maecenas dictum non tellus sed viverra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam sed ipsum non ante gravida maximus sed luctus lectus.",
  },

  contact: {
    city: "London, UK",
    phone: "+44 999 1232 123",
    email: "john@doe.com",
    linkedin: { url: "https://linkedin.com/johndoe", shorthand: "johndoe" },
    github: { url: "https://github.com/johndoe", shorthand: "johndoe" },
  },

  experiences: [
    {
      company: "Alphabet Inc.",
      title: "senior software engineer",
      location: "London, UK",
      start: "2019",
      end: "present",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius ligula ultrices rutrum elementum. \
      Nunc eu porta metus, et finibus sapien. Mauris non urna eros. Morbi odio metus, consectetur sed massa vitae, \
      placerat eleifend arcu. Proin tristique ligula felis, et laoreet neque euismod sed. \
      <ul> <li> First bullet </li> <li> Second bullet</li></ul> \
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. \
      Sed accumsan sodales dignissim. Nullam suscipit ornare lacus, at congue lacus mollis id. \
      Aliquam venenatis pellentesque arcu et volutpat.",
    },
    {
      company: "Apple Inc.",
      title: "software engineer",
      location: "Cupertino, CA",
      start: "2018",
      end: "2019",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius ligula ultrices rutrum elementum. \
      Nunc eu porta metus, et finibus sapien. Mauris non urna eros. Morbi odio metus, consectetur sed massa vitae, \
      placerat eleifend arcu. Proin tristique ligula felis, et laoreet neque euismod sed. \
      <ul> <li> First bullet </li> <li> Second bullet</li></ul> \
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. \
      Sed accumsan sodales dignissim. Nullam suscipit ornare lacus, at congue lacus mollis id. \
      Aliquam venenatis pellentesque arcu et volutpat.",
    },
    {
        company: "Microsoft.",
        title: "Developer - Internship",
        location: "Redmond, WA",
        start: "2017",
        end: "2018",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius ligula ultrices rutrum elementum. \
        Nunc eu porta metus, et finibus sapien. Mauris non urna eros. Morbi odio metus, consectetur sed massa vitae, \
        placerat eleifend arcu. Proin tristique ligula felis, et laoreet neque euismod sed. \
        <ul> <li> First bullet </li> <li> Second bullet</li></ul> \
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. \
        Sed accumsan sodales dignissim. Nullam suscipit ornare lacus, at congue lacus mollis id. \
        Aliquam venenatis pellentesque arcu et volutpat.",
      },
  ],

  education: [
    {
      degree: "PhD. Computer Science",
      school: "Stanford University",
      start_year: "2015",
      end_year: "2018",
    },
    {
      degree: "BSc. Computer Science",
      school: "Stanford University",
      start_year: "2013",
      end_year: "2015",
    },
  ],

  tech_skills: [
    { tool: "Python", icon: "carbon:logo-python" },
    {tool: "FastAPI", icon: "simple-icons:fastapi"},
    { tool: "Alpine.js", icon: "simple-icons:alpinedotjs" },
    { tool: "Postgres", icon: "cib:postgresql" },
    { tool: "Unix", icon: "carbon:linux-alt" },
    { tool: "Airflow", icon: "cib:apache-airflow" },
  ],

  tech_skills_img_logo: [{ tool: "Plotly", img_src: "img/plotly.png" }],
  language_skills: [
    {
      language: "English",
      level: "Native",
      icon: "emojione-monotone:flag-for-united-kingdom",
    },
    {
        language: "French",
        level: "Professional",
        icon: "emojione-monotone:flag-for-france",
      },
    {
      language: "Spanish",
      level: "B2",
      icon: "emojione-monotone:flag-for-spain",
    },
  ],
  interests: [
    { title: "Weightlifting", icon: "maki:fitness-centre-11" },
    { title: "Cycling", icon: "cil:bike" },
    { title: "Football", icon: "emojione-monotone:soccer-ball" },
  ],
};
