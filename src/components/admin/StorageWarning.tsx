
import React from 'react';

const StorageWarning: React.FC = () => {
  return (
    <div className="bg-destructive/20 text-destructive p-4 rounded-md mb-6">
      <p className="font-medium">Warning: Local Storage Not Available</p>
      <p className="text-sm">Articles will not persist between sessions. This could be due to private browsing mode or browser settings.</p>
    </div>
  );
};

export default StorageWarning;
