import { FC } from "react";

type CharacterProps = {
    character: Character;
};

const Character: FC<CharacterProps> = ({ character }) => {
    const { name, thumbnail } = character;
    return (
        <div className="card">
            <img src={`${thumbnail.path}.${thumbnail.extension}`} className="card-img-top" />
            <div className="card-body">
                <p className="card-text">
                    <b>{name}</b>
                </p>
            </div>
        </div>
    );
};

export default Character;