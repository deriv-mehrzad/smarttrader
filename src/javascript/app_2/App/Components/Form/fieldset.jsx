import classNames from 'classnames';
import PropTypes  from 'prop-types';
import React      from 'react';
import Tooltip    from '../Elements/tooltip.jsx';

const Fieldset = ({
    children,
    className,
    header,
    icon,
    is_center,
    onMouseEnter,
    onMouseLeave,
    tooltip,
}) => {
    const fieldset_class   = classNames('fieldset-header', is_center ? 'center-text' : '');
    const field_left_class = classNames('field-info', { icon }, icon, is_center ? 'center' : 'left');

    return (
        <fieldset className={className}  onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {!!header &&
                <div className={fieldset_class}>
                    <span className={field_left_class}>{header}</span>
                </div>
            }
            {!!tooltip &&
                <span className='field-info right'>
                    <Tooltip
                        alignment='left'
                        icon='info'
                        message={tooltip || 'Message goes here.'}
                    />
                </span>
            }
            {children}
        </fieldset>
    );
};

// ToDo:
// - Refactor Last Digit to keep the children as array type.
//   Currently last_digit.jsx returns object (React-Element) as 'children'
//   props type.
Fieldset.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
    ]),
    className   : PropTypes.string,
    header      : PropTypes.string,
    icon        : PropTypes.string,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    tooltip     : PropTypes.string,
};

export default Fieldset;
