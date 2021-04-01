import './MemberList.scss';
import Button from '../../button/Button';
import Card from '../../card/Card';
import axios from "axios";
import {useState,useEffect} from 'react';
import Loading from "../../components/loading/Loading";
    
    
function MemberList(){
    const [memberState,setMemberState]=useState({
        members:null,
        status:"idle",
    });
    const [loading,setLoading]=useState(true);
    useEffect(() => {
        (async () => {
            setMemberState({members:null,status:"pending"});
            try{
                const result = await axios.get("http://ec2-13-124-127-8.ap-northeast-2.compute.amazonaws.com:3000/api/members");
                setMemberState({members:result.data.data ,status:"resolved"});
                setTimeout(()=>setLoading(false),800);
            }catch(e){
                setMemberState({members:null,status:"rejected"});
            }
        })();
    }, []);
    const removeCard = (evt) => {
        evt.stopPropagation();
        console.log('REMOVE CARD!!');
    };

    switch (loading){
        case false:
            return (
                <div className="member-list">
                    <div className="member-list__title">파트원 소개</div>
                    <div className="member-list__header member-list-header">
                        <div className="member-list-header__nav">Gallery View</div>
                        <div className="member-list-header__empty"></div>
                        <Button text="Properties" textColor="#777"></Button>
                        <Button text="Filter" textColor="#777"></Button>
                        <Button text="Sort" textColor="#777"></Button>
                        <Button text="Search" textColor="#777" icon="search"></Button>
                        <Button text="..." textColor="#777"></Button>
                    </div>
                    <hr />
                    <div className="member-list-content-wrapper">
                        {
                            memberState.members.map(member => 
                                <Card memberData={member}
                                    onRemoveCard={removeCard}/>)
                        }
                    </div>
                </div>
            );
        default:
            return <Loading/>

    }
    
}
export default MemberList;