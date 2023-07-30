import PropTypes from 'prop-types';
import Articles from './ArticleData';
import "./Styling.css"
const NewsSummary = props =>
{
    const { newsStories } = props;


    const Article = newsStories.map(newsStory => <Articles key={newsStory.id} newsStory={newsStory} />)
    return (

        <div className='container'>
            <h1>
                <p>TOP NEWS OF THE DAY:</p>
            </h1>

            <div className='row'>
                {Article}
            </div>
        </div>

    )

}

NewsSummary.propTypes = {
    newsStories: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            fields: PropTypes.shape({
                headline: PropTypes.string.isRequired,
                thumbnail: PropTypes.string.isRequired,
            })
        })
    )
};
export default NewsSummary

