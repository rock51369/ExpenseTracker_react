import './Card.css';

function Card(props) 
{
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>{props.children}</div>
    );
}
//This is a wrapper class 
/* This wrapper class acts as a shell around a container because it returns div which also acts 
as a container
Just think of it as a div tag in it with a class name card

children prop is a special reserverd prop that returns the content between the opening and the 
closing tags of the function name 
So with the props children you can use the <card> </card> as a normal div tag

props.className just returns the class which is set on the function <card className="stop"> </card>

*/
export default Card;