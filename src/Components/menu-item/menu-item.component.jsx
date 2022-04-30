import { useNavigate } from "react-router-dom";


const MenuItem = ({title, img, history, match, linkUrl}) => {
	const navigate = useNavigate();
	return (
        <div onClick={ () => navigate(`${match.img}${linkUrl}`)}>
	<div
	style={{backgroundImage: `url(${img})`}}
	/>
	<div>
	<h1>{title.toUpperCase()}</h1>
	<span>Shop now</span>
	</div>
	</div>
	)
}

export default MenuItem;
