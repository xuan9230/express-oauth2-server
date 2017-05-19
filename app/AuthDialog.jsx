import React from 'react';

function parseQuery(qstr) {
    var query = {};
    var a = (qstr[0] === '?' ? qstr.substr(1) : qstr).split('&');
    for (var i = 0; i < a.length; i++) {
        var b = a[i].split('=');
        query[decodeURIComponent(b[0])] = decodeURIComponent(b[1] || '');
    }
    return query;
}

const AuthDialog = ({ location }) => {
  const qs = parseQuery(location.search);
  return (
    <div>
      <p>Hi {qs.username},</p>
      <p><b>{qs.clientName}</b> is requesting <b>full access</b> to your account.</p>
      <p>Do you approve?</p>

      <form action="/api/oauth2/authorize" method="post">
        <input name="transaction_id" type="hidden" value={qs.transactionID} />
        <div>
        <input type="submit" value="Allow" id="allow" />
        <input type="submit" value="Deny" name="cancel" id="deny" />
        </div>
      </form>
    </div>
  );
}

export default AuthDialog;
