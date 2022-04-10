import content from 'api/utils/google/gmail/sendEmail/templates/eurekaEmailTemplate';

const Thing = () => {
  return <div dangerouslySetInnerHTML={{__html: content({fileLink: "fileLink", folderLink: 'folderLink', userEmail: "userEmail@userEmail.com", userName: "Local Person"})}}/>
}

export default Thing;
