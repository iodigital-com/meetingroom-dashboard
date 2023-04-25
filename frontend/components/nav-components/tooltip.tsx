import React from 'react';
import styled from 'styled-components';
import { TooltipProps } from 'utils/types';

const Tooltip = styled.div`
  position: relative;
  display: inline-block;
  margin: 1rem;
  font-size: 1rem;
  color: #fff;

  &:hover {
    .tooltip-text {
      opacity: 1;
      visibility: visible;
      transform: translateY(-10px);
    }

    .tooltip-arrow {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const TooltipText = styled.div`
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  opacity: 0;
  visibility: hidden;
  padding: 5px;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-top: 10px solid #333;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    border-bottom: none;
  }
`;

const TooltipArrow = styled.div`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  border-top: 10px solid #333;
  border-right: 10px solid transparent;
  border-left: 10px solid transparent;
  border-bottom: none;
  opacity: 0;
  transition: all 0.2s ease-in-out;
`;

const TooltipWrapper = ({ children, content }: TooltipProps) => (
  <Tooltip>
    {children}
    <TooltipArrow className="tooltip-arrow" />
    <TooltipText className="tooltip-text">{content}</TooltipText>
  </Tooltip>
);

export default TooltipWrapper;
