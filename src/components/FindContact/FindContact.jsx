import PropTypes from 'prop-types';
// import { Label, Input } from './FindContact.styled';

export const FindContact = ({filter, onChangeFilter }) => {
    return (
        <>
            <label>
                <p>
                     Find contact by name
                </p>
                <input
                    onChange={onChangeFilter}
                    type="text"
                    name="filter"
                    value={filter}
                    
                >
                </input>
            </label>
        </>
    )
}

FindContact.prppTypes = {
    filter: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func.isRequired
}