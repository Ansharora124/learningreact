type person={
name:string;
age:number;
}

export const Person=(props:person)=>{
    return(
    <div>
        <p>name: {props.name}</p>
        <p>age:{props.age}</p>


    </div>
    )

}
    

