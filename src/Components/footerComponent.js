import React from 'react';
import TextField from '@material-ui/core/TextField';
import { FaInstagram, FaLinkedin, FaLinkedinIn, FaYoutube, FaSpotify} from 'react-icons/fa'
import {NavLink} from 'react-router-dom'
import '../Stylesheets/Footer.css'

const footerComponent = (props) =>
{

	return(
		<div className='footer'>
			<p className='foo-p-title'>
				Have a Query? Get in Touch
			</p>
			<div className='foo-div-det'>
				<div>
					<div className= 'foo-div-map'>
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.6508028487688!2d78.3804256148477!3d17.3805281880827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb942a2497f349%3A0x5c30ca8d2ffb8734!2sVasavi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1615702592047!5m2!1sen!2sin"
					width="100%" height="100%" allowfullscreen="true" loading="lazy"></iframe>
					</div>
					<br />
					<p className='foo-p-address'>
						9-5-81, Swayam E-Cell, < br />
						Vasavi College of Engineering, Ibrahimbagh, < br />
						Hyderabad - 500 031 < br />
						Telangana, India
					</p>
					<br />
					<p className='foo-p-address foo-p-contact'>
						Swayam@vce.ac.in <br />
						+91 728-782-8919
					</p>
					<br />
					<div className='foo-div-logos'>
						<FaInstagram size={30}/>
						<FaLinkedinIn size={30}/>
						<FaYoutube size={30} />
						<FaSpotify size={30} />
					</div>
				</div>
				<div className='foo-div-form'>
					<form>
						<TextField required id='standard-required' label='Name' defaultValue='' autoComplete='false'/> <br/> <br/>
						<TextField required id='standard-required' label='Email' defaultValue=''/> <br/> <br/>
						<TextField required id='standard-required' label='Phone Number' defaultValue=''/> <br/> <br/>
						<TextField required id='standard-required' label='Subject' defaultValue=''/> <br/> <br/>
						<TextField required id='standard-required' label='Message' multiline rows={8} defaultValue=''/>
						<button className='foo-btn-submit'>Submit</button>
					</form>
				</div>
			</div>
			<div className='foo-div-main'>
				<div className='foo-div-tm'>
					<p>
						2021 Swayam E-Cell, VCE
					</p>
				</div>
				<ul className='Nav-ul-main foot-ul'>
				<NavLink to='/incubator' className='Nav-li' activeClassName='selected' exact>
					About Us &nbsp; | &nbsp;
				</NavLink>
				<NavLink to='/about' className='Nav-li' activeClassName='selected' exact>
					Initiatives &nbsp; | &nbsp;
				</NavLink>
				<NavLink to='/' className='Nav-li' activeClassName='selected' exact>
					Resources &nbsp; | &nbsp;
				</NavLink>
				<NavLink to='/' className='Nav-li' activeClassName='selected' exact>
					Partners &nbsp; | &nbsp;
				</NavLink>
				<NavLink to='/' className='Nav-li' activeClassName='selected' exact>
					Join Us &nbsp; | &nbsp;
				</NavLink>
				<NavLink to='/' className='Nav-li' activeClassName='selected' exact>
					Our Team
				</NavLink>
			</ul>
			</div>
		</div>
	)
}

export default footerComponent