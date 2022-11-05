import * as React from 'react';

interface IProps { };

export const <%= component %>: React.FC <IProps> = (props) => {
  const { } = props
  return (
    <div className="<%= className %>">
      <%= component %> component
    </div>
  )
};

export default React.memo(<%= component %>);
