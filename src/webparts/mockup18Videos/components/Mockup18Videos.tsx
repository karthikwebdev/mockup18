import * as React from 'react';
import styles from './Mockup18Videos.module.scss';
import { IMockup18VideosProps } from './IMockup18VideosProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Mockup18Videos extends React.Component<IMockup18VideosProps, {}> {
  public render(): React.ReactElement<IMockup18VideosProps> {
    return (
      <div className={ styles.mockup18Videos }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
