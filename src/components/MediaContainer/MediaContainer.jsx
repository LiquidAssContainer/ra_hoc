export const MediaContainer = ({ list }) => {
  return <MediaList list={list} />;
};

const withWrapper = (component) => {
  const { views } = component.props;
  let Wrapper;

  if (views <= 100) {
    Wrapper = New;
  } else if (views > 1000) {
    Wrapper = Popular;
  } else {
    return component;
  }
  return <Wrapper>{component}</Wrapper>;
};

const MediaList = ({ list }) => {
  return (
    <div className="media_container">
      {list.map((item) => {
        switch (item.type) {
          case 'video':
            return withWrapper(<VideoItem {...item} />);

          case 'article':
            return withWrapper(<ArticleItem {...item} />);
        }
      })}
    </div>
  );
};

const New = ({ children }) => {
  return (
    <div className="wrap-item wrap-item-new">
      <span className="label">New!</span>
      {children}
    </div>
  );
};

const Popular = ({ children }) => {
  return (
    <div className="wrap-item wrap-item-popular">
      <span className="label">Popular!</span>
      {children}
    </div>
  );
};

const ArticleItem = ({ title, views }) => {
  return (
    <div className="item item-article">
      <h3>
        <a href="#">{title}</a>
      </h3>
      <p className="views">Прочтений: {views}</p>
    </div>
  );
};

const VideoItem = ({ url, views }) => {
  return (
    <div className="item item-video">
      <iframe
        src={url}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
      <p className="views">Просмотров: {views}</p>
    </div>
  );
};
