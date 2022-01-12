import { h } from 'preact';
import { Link } from 'preact-router'

const Profile = () => (
	<div>
		<Link href="/">
			To Home
		</Link>

		<h1>Profile</h1>
		<p>This is the Profile component.</p>
	</div>
);

export default Profile;
