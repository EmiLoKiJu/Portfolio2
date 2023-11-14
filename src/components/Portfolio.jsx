import { useSelector } from "react-redux/es/hooks/useSelector";

const Portfolio = ()=> {
  const { message } = useSelector((store) => store.greetings)
    return(
      <div>
        <div>
          {message}
        </div>
      </div>
    );
  }
  
  export default Portfolio;