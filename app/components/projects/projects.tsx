import Card from "../card/Card";
import WeatherApp from "../../public/Weather-App.png";
import ToDoApp from "../../public/Todo-List.png";
import Deutschly from "../../public/Deutschly.png"


export default function Projects() {
  return (
    <div className="ProjectsContainer">
      <h1>Portfolio</h1>
      <div className="ProjectCards">
        <Card
          image={WeatherApp}
          title="Weather App"
          description="A weather app that provides real-time weather updates and forecasts."
          link="https://weather-app-ashen-eta.vercel.app/"
          liveLink="https://weather-app-ashen-eta.vercel.app/"
          githubLink="https://github.com/yourusername/weather-app"
        />
        <Card
          image={ToDoApp}
          title="To Do App"
          description="A simple to-do list application to manage tasks efficiently."
          link="https://todo-list-ashen.vercel.app/"
          liveLink="https://todo-list-ashen.vercel.app/"
          githubLink="https://github.com/yourusername/todo-list"
        />
        <Card
          image={Deutschly}
          title="Deutschly"
          description="An interactive platform for learning German with various resources."
          link="https://deutschly.vercel.app/"
          liveLink="https://deutschly.vercel.app/"
          githubLink="https://github.com/yourusername/deutschly"
        />
        <Card
          image={WeatherApp}
          title="Weather App"
          description="A weather app that provides real-time weather updates and forecasts."
          link="https://weather-app-ashen-eta.vercel.app/"
          liveLink="https://weather-app-ashen-eta.vercel.app/"
          githubLink="https://github.com/yourusername/weather-app"
        />
        <Card
          image={ToDoApp}
          title="To Do App"
          description="A simple to-do list application to manage tasks efficiently."
          link="https://todo-list-ashen.vercel.app/"
          liveLink="https://todo-list-ashen.vercel.app/"
          githubLink="https://github.com/yourusername/todo-list"
        />
        <Card
          image={Deutschly}
          title="Deutschly"
          description="An interactive platform for learning German with various resources."
          link="https://deutschly.vercel.app/"
          liveLink="https://deutschly.vercel.app/"
          githubLink="https://github.com/yourusername/deutschly"
        />
      </div>
    </div>
  );
}