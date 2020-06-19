async function getPage(){
  let test = {'title': 'ok'}
  return test;
}

exports.handler = async function(event, context, callback) {
  await getPage();

  callback(null, {
  statusCode: 200,
  body: JSON.stringify(r)
  });
}
