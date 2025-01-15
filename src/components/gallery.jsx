import React, { useState } from "react";
import "../styles/gallery.css";
import SideNavigation from "./sideNavigation";
export default function Gallery() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavigation = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <SideNavigation isOpen={isOpen} toggleNavigation={toggleNavigation} />
            <div class="image-grid">
                <div class="image01"></div>
                <div class="image02"></div>
                <div class="image03"></div>
                <div class="image04"></div>
                <div class="image05"></div>
                <div class="image06"></div>
                <div class="image07"></div>
                <div class="image08"></div>
                <div class="image09"></div>
                <div class="image10"></div>
                <div class="image11"></div>
                <div class="image12"></div>
            </div>
        </div>
    )
}
