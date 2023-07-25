import {
	Body,
	Container,
	Head,
	Heading,
	Html,
	Preview,
	Text,
} from "@react-email/components";



export const Newsletter = ({email}) => (
	<Html>
		<Head />
		<Preview>Succesfully subscribed to our newsletter</Preview>
		<Body style={main}>
			<Container style={container}>
				<Heading style={h1}>Welcome {email}</Heading>
				
				<Text style={{ ...text, marginBottom: "14px" }}>
					Thank you for subscribing to our newsletter!
				</Text>
				<Text style={footer}>
					Yours truly, Chibuzo Ekwue
				</Text>
			</Container>
		</Body>
	</Html>
);

export default Newsletter;

const main = {
	backgroundColor: "#ffffff",
};

const container = {
	paddingLeft: "12px",
	paddingRight: "12px",
	margin: "0 auto",
};

const h1 = {
	color: "#333",
	fontFamily:
		"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
	fontSize: "24px",
	fontWeight: "bold",
	margin: "40px 0",
	padding: "0",
};

const text = {
	color: "#333",
	fontFamily:
		"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
	fontSize: "14px",
	margin: "24px 0",
};

const footer = {
	color: "#898989",
	fontFamily:
		"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
	fontSize: "12px",
	lineHeight: "22px",
	marginTop: "12px",
	marginBottom: "24px",
};


