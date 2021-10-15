import classNames from 'classnames'
import logo from 'assets/logo-full.png';
function Header(){
return(
<div
className={classNames(
        "header",

      )}
>
<img className="header__logo"
src={logo}
alt="Netflix Logo"/>
</div>
);
}
export default Header;