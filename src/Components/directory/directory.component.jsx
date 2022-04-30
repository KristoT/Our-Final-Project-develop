import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import { connect } from "react-redux";
import MenuItem from "../menu-item/menu-item.component";
import React from "react";

const Directory = ({ sections }) => (
	<div>
	{sections.map(({ id, ...otherSectionProps }) => (
		<MenuItem key={id} {...otherSectionProps} />
	))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
});


export default connect(mapStateToProps)(Directory);
