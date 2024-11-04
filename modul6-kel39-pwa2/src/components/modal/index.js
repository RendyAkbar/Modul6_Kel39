import React from "react";
import "./index.css";

const placeholderImageUrl = "https://placehold.jp/150x150.png";

export default function Modal({ isShow, data, onCancel }) {
    if (!isShow || !data) return null;

    return (
        <div className="modal-overlay" datacy="modal-delete">
            <div className="modal-content">
                <img
                    src={data.i?.imageUrl || placeholderImageUrl}
                    alt={data.l}
                    className="modal-image"
                />
                <div className="modal-info">
                    <h2>{data.l}</h2>
                    <p><strong>Platform:</strong> {data.q}</p>
                    <p><strong>Release Year:</strong> {data.y}</p>
                    <p><strong>Cast:</strong> {data.s}</p>
                </div>
                <button className="close-button" onClick={onCancel}>Close</button>
            </div>
        </div>
    );
}
