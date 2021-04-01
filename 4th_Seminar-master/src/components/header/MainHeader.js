import "./MainHeader.scss"
import Button from "../../button/Button";
import MenuIcon from "../../assets/icon/mdi_dehaze.svg";

function MainHeader({match,history,location}){
    return(
        <header className="main-header">
            <img className="main-header__item" alt="icon" src={MenuIcon}/>
            <nav className="main-header__icon">
                <Button text="[ON SOPT]Web Part"
                    onClickFunc={()=>history.push('/')}></Button>
                <span>/</span>
                <Button text="파트원 소개" onClickFunc={()=>history.push('/members')}></Button>
            </nav>
    
            <div className="empty"></div>
            <div className="main-header__nav">
                <Button text="Share"/>
                <Button text="Update"/>
                <Button text="Etc"/>
            </div>

        </header>
    )
}
export default MainHeader;