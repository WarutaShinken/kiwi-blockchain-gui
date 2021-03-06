import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as KiwiIcon } from './images/kiwi.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={KiwiIcon} viewBox="0 0 150 58" {...props} />;
}
