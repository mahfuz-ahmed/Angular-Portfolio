import { Component } from "@angular/core";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrl: "./skills.component.css",
})
export class SkillsComponent {
  languageSkills = [
    {
      name: "C",
      percentage: 90,
      image: "../../../../assets/skills/c.png",
    },
    {
      name: "C#",
      percentage: 95,
      image: "../../../../assets/skills/CSharp.png",
    },
    {
      name: "SQL",
      percentage: 90,
      image: "../../../../assets/skills/sql.png",
    },
    {
      name: "Java Script",
      percentage: 90,
      image: "../../../../assets/skills/js.png",
    },
    {
      name: "HTML5",
      percentage: 95,
      image: "../../../../assets/skills/html.png",
    },
    {
      name: "CSS3",
      percentage: 90,
      image: "../../../../assets/skills/css .png",
    },
  ];

  frameworkSkills = [
    { name: "ASP.NET Core", percentage: 90 },
    { name: ".NET Web API", percentage: 90 },
    { name: "ASP.NET MVC", percentage: 85 },
    { name: "ASP.NET Razor", percentage: 85 },
    { name: "WebForms", percentage: 80 },
    { name: "Angular 16+", percentage: 90 },
    { name: "Bootstrap", percentage: 85 },
    { name: "PrimeNG", percentage: 80 },
  ];

  databaseSkills = [
    { name: "SQL Server", percentage: 90 },
    { name: "EF Core", percentage: 85 },
    { name: "ADO.NET", percentage: 85 },
    { name: "LINQ", percentage: 85 },
    { name: "SP", percentage: 85 },
    { name: "Functions", percentage: 85 },
    { name: "Views", percentage: 85 },
    { name: "Indexing", percentage: 85 },
    { name: "Joining", percentage: 85 },
    { name: "Triggers", percentage: 80 },
  ];

  architectureSkills = [
    { name: "SDLC", percentage: 95 },
    { name: "OOP", percentage: 95 },
    { name: "OOD", percentage: 90 },
    { name: "SOLID", percentage: 90 },
    { name: "Clean", percentage: 85 },
    { name: "Microservices", percentage: 80 },
    { name: "CQRS Pattern", percentage: 85 },
    { name: "REST API", percentage: 90 },
  ];

  toolSkills = [
    { name: "Git", percentage: 90 },
    { name: "TFS", percentage: 90 },
    { name: "Caching", percentage: 85 },
    { name: "SignalR", percentage: 85 },
    { name: "Azure", percentage: 80 },
    { name: "Unit Testing", percentage: 85 },
    { name: "RDLC", percentage: 85 },
    { name: "Agile", percentage: 85 },
    { name: "RxJS", percentage: 85 },
  ];

  getCircleGradient(percentage: number) {
    const degree = (percentage / 100) * 360;
    return `conic-gradient(#4b7bec ${degree}deg, #1e293b ${degree}deg)`;
  }
}
