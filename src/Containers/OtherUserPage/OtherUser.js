import React,{Component} from "react";
import "./OtherUser.css";
import ItemSearched from "../../SearchComponents/ItemSearched";

class OtherUser extends Component {

  state={
    userRelated:[],
  }

  componentDidMount(){
      const url = "https://jsonplaceholder.typicode.com/photos"; 
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.setState({userRelated:data.slice(0,10)})
        })
        .catch((error)=>{
          console.log(error);
        })
  }

  



  render(){

    const RelatedItems=this.state.userRelated.map((item)=>{
      return(
        <ItemSearched
        name={item.title}
        subname="whatever"
        image={item.url}
        key={item.id}
        id={item.id}/>
      )
    })
    return(
      <div className="other-user-page-class">
        <div className="other-profile-pic-name">
          <img
            className="other-profile-pic-class"
            src="https://lh3.googleusercontent.com/proxy/vKnYvvciLjZGOkZERtIBjUFznXRUrdw28Xsbkwjcru15ewO_7f8GyChTvLwtESUfTI99Duir2H461_fHiKg0q02gJS7IUAdanNbwYY5KHfvUJf1GykCdIN7dr3C33T6wqFZ4K97XRg"/>
          <h2 className="other-profile-name-class">Whatever For Now</h2>
        </div>

      {RelatedItems}
      </div>


    )
  }



}

    


export default OtherUser;