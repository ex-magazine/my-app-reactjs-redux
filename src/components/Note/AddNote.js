

import React, {useState, useRef} from "react";
import {connect } from 'react-redux';

import { actAddNote } from "../../actions/index";

function AddNote (props) {
	const [content, setContent ] = useState();
	const noteInput = useRef(null);
	const handleAdd = () => {
		 // Dispatch action.
		// Props này được tạo bởi hàm
		// mapDispatchToProps bên dưới
		props.addNote(content)
	
		//Gán giá trị cho input thành rỗng
		noteInput.current.value = ''
	
		//Cập nhật lại state content
		setContent('')

	};
	return ( 
		<div className="col-md-12" style={{ marginBottom: 15 }}>
			<div className="input-group mb-8">
				<input
				type="text"
				className="form-control"
				placeholder="Nội dung ghi chú"
				value =  {content}
				onChange={(e) => {
						setContent(e.target.value)
				}}
				ref={noteInput}
				/>
				<div className="input-group-append">
					<button className="btn btn-primary" onClick={handleAdd}>
							Thêm
					</button>
				</div>
			</div>
		</div>
	);
}

//Chuyển dispatch thành props.
//Ở đây nếu mình muốn dispatch action actAddNote
//thì chỉ cần gọi props.addNote(content)

const mapDispatchToProps = (dispatch) => {
	return {
		addNote: (content) => {
			dispatch(actAddNote(content));
		},
	};
};

export default connect(null, mapDispatchToProps)(AddNote) ;