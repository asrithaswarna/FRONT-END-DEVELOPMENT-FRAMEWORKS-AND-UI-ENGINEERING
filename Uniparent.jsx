import ProfileCard from "./Unichild";
function Uniparent(){
const userdata={
    name:"Asritha",
    id:2520040114,
};
return (
<div>
    <h1>Parent Component</h1>
    <ProfileCard user={userdata}/>
</div>
);
}
export default Uniparent;