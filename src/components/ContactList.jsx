import { useState } from "react";
import useCollapse from "react-collapsed";

const init = [
    {
      id: 1,
      name: "kanika",
      email: "malikkanika9@gmail.com",
      phone: "7206808617",
      url:
        "https://media.istockphoto.com/photos/closeup-portrait-of-her-she-nice-attractive-puzzled-ignorant-girl-picture-id1132758418?k=20&m=1132758418&s=612x612&w=0&h=ca6WVDDblf3um3mdfCSGVpLGfwuyjj5UTLD9rMMHfH4="
    },
    {
      id: 2,
      name: "Kiran",
      email: "kiran@gmail.com",
      phone: "9255994921",
      url:
        "https://thumbs.dreamstime.com/b/happy-person-portrait-smiling-woman-tanned-skin-curly-hair-happy-person-portrait-smiling-young-friendly-woman-197501184.jpg"
    },
    {
      id: 3,
      name: "chirag",
      email: "chirag@gmail.com",
      phone: "7722033407",
      url:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      id: 4,
      name: "sonali",
      email: "sonali@gmail.com",
      phone: "8053339784",
      url:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    }
  ];
  
  export const ContactList = () => {

    const [contact,setContact]=useState(init)
    const[display,setDispaly] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse(display)
    
         const handelClick = ()=>{

            if(display===false){
             setDispaly(true);
            }
            else{
               setDispaly(false)
           }
         }
    const handleRemove=(id)=>{

 setContact(contact.filter((item)=>item.id!==id))

    }
    return (
      <div>
        {contact.map((item) => (
          <div key={item.id} {...getToggleProps({onClick: handelClick})}
            style={{
              display: "flex",
             border: "2px solid black",
              padding: "20px",
             width:"500px",
             marginLeft:"50px"
            }}
          ><img
          style={{ width: "60px", height: "60x", borderRadius: "50px" }}
          src={item.url}
          alt=""
        />
            {item.name}
            <br/><br/>
            {item.email}

          <div {...getCollapseProps()}>{item.phone}</div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button  onClick={() => handleRemove(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    );
  };
  