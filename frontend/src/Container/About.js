
import * as queryString from "query-string";
const About = () => {
    const paramsForFB = queryString.stringify({
        client_id: "302650715385015",
        redirect_uri: "https://localhost:3000/",
        scope: ["email", "user_friends"].join(","), // comma seperated string
        response_type: "code",
        auth_type: "rerequest",
        display: "popup",
    });
    const facebookLoginUrl = `https://www.facebook.com/v13.0/dialog/oauth?${paramsForFB}`;
    //https://www.facebook.com/v13.0/dialog/oauth?auth_type=rerequest&client_id=302650715385015&display=popup&redirect_uri=https%3A%2F%2Flocalhost%3A3000%2F&response_type=code&scope=email%2Cuser_friends
    return (
        <div>
            <a
                href={facebookLoginUrl}
                style={{
                    textDecoration: "none",
                    color: "grey",
                    paddingLeft: "10px",
                    paddingTop: "0",
                }}
            >
                Facebook
            </a>
        </div>
    );
};
export default About;
