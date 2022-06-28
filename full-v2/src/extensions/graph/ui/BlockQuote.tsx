import React, { forwardRef, useState } from 'react'
import styled from 'styled-components'
import JXGBoard from 'jsxgraph-react-js'

import { UIProps } from '..'

interface IProps {
  className?: string
  initialProps: UIProps,
  useListenProps: (cb: (newProps: UIProps) => void) => void
}

let logicJS = (brd: any) => {
  brd.suspendUpdate();
  var a = brd.create('slider', [[2, 8], [6, 8], [0, 3, 6]], { name: 'a' });
  var b = brd.create('slider', [[2, 7], [6, 7], [0, 2, 6]], { name: 'b' });
  var A = brd.create('slider', [[2, 6], [6, 6], [0, 3, 6]], { name: 'A' });
  var B = brd.create('slider', [[2, 5], [6, 5], [0, 3, 6]], { name: 'B' });
  var delta = brd.create('slider', [[2, 4], [6, 4], [0, 0, Math.PI]], { name: '&delta;' });

  var c = brd.create('curve', [
    function (t: any) { return A.Value() * Math.sin(a.Value() * t + delta.Value()); },
    function (t: any) { return B.Value() * Math.sin(b.Value() * t); },
    0, 2 * Math.PI], { strokeColor: '#aa2233', strokeWidth: 3 });
  brd.unsuspendUpdate();
}

export const BlockQuote = forwardRef((props: IProps, ref: any) => {

  const { className, initialProps, useListenProps } = props
  useListenProps(handlePropsUpdate)
  const [attrs, setAttrs] = useState({ ...initialProps.attrs })

  function handlePropsUpdate(newProps: any) {
    // console.log(newProps)
  }
  return (
        <JXGBoard
          logic={logicJS}
          boardAttributes={{ axis: true, boundingbox: [-12, 10, 12, -10] }}
          style={{
            border: "3px solid red"
          }}
        />
  )
})

export const StyledBlockQuote = styled.blockquote`
  box-sizing: border-box;
  color: #6a737d;
  padding: 0 1em;
  border-left: 4px solid #dfe2e5;
  margin: 0.2rem 0 0 0;
  margin-right: 0;

  [dir='rtl'] & {
    padding-left: 0;
    padding-right: 4px;
  }

  &:first-child {
    margin-top: 0;
  }

  &::before {
    content: '';
  }

  &::after {
    content: none;
  }

  & p {
    display: block;
  }

  & table,
  & table:last-child {
    display: inline-table;
  }
`
