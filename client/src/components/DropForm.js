import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'your_upload_preset_id';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/your_cloudinary_app_name/upload';


class ContactForm extends Component {

	constructor(props) {
		super(props);

		this.state = {
		  uploadedFileCloudinaryUrl: ''
		};
	}

	onImageDrop(files) {
		this.setState({
		  uploadedFile: files[0]
		});

		this.handleImageUpload(files[0]);
	}

	handleImageUpload(file) {
		let upload = request.post(CLOUDINARY_UPLOAD_URL)
	        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
	        .field('file', file);

		upload.end((err, response) => {
	  	if (err) {
	    	console.error(err);
	  	}

	  	if (response.body.secure_url !== '') {
	    	this.setState({
	      		uploadedFileCloudinaryUrl: response.body.secure_url
		    	});
			}
		});
	}

	render() {
		return (
			<div>
			    <div className="FileUpload">
					<Dropzone
				      multiple={false}
				      accept="image/*"
				      onDrop={this.onImageDrop.bind(this)}>
				      <p>Drop an image or click to select a file to upload.</p>
				    </Dropzone>	       
	       		</div>
				<div>
				   {this.state.uploadedFileCloudinaryUrl === '' ? null :
				   <div>
				       <p>{this.state.uploadedFile.name}</p>
				       <img src={this.state.uploadedFileCloudinaryUrl} />
				   	</div>}
				</div>
			</div>
		)
	}
}

export default ContactForm