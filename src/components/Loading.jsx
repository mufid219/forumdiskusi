import React from 'react';
import LoadingBar from 'react-redux-loading-bar';
// import '../App.css';

function Loading() {
  return (
    <div className="sticky top-0 z-10">
      <LoadingBar
        updateTime={100} // klo gak salah ini soal batas kapan loadingnya baru muncul
        progressIncrease={1} // defaultnya 5
        showFastActions
      />
    </div>
  );
}

export default Loading;
