import content from 'api/utils/google/gmail/sendEmail/templates/userEmailTemplate';

const Thing = () => {
  return (
    <div dangerouslySetInnerHTML={{__html: content}}/>
  )
}

export default Thing;
