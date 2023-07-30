import PropTypes from 'prop-types';
import "./Styling.css"

const Articles = ({ newsStory }) =>
{
    const { headline, thumbnail } = newsStory.fields;
    return (
        <>
            <div className='col-lg-6 col-md-9 col-sm-12'>
                <img src={thumbnail} className="img-fluid" alt="Thumbnail" />
                <p></p>
                <h3>{headline}</h3>
                <p></p>
            </div>
        </>
    )
}

Articles.propTypes = {
    newsStory: PropTypes.shape({
        fields: PropTypes.shape({
            headline: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};
export default Articles;