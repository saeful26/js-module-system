import Table from "./module1";

const table = new Table({
    columns: ["Name", "Email", "Country"],
    data: [
      ["saefullah", "saeful@mail.com", "Indonesia"],
      ["habibi", "habibi@mail.com", "arabian"],
      ["thomas", "mark@mail.com", "amerika"],
  ]
  })

  const index = document.getElementById('index')
  table.render(index)


