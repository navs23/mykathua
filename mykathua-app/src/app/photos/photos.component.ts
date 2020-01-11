import { Component, OnInit} from '@angular/core';
import 'hammerjs';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
@Component({
selector: 'kth-photo',
templateUrl: 'photos.component.html',
})

export class PhotosComponent implements OnInit {
    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];
    ngOnInit(): void {
 
        this.galleryOptions = [
            { "imageAutoPlay": true, 
            "imageAutoPlayPauseOnHover": true, 
            "previewAutoPlay": true, 
            "previewAutoPlayPauseOnHover": true },
            {
                width: '600px',
                height: '400px',
                thumbnailsColumns: 4,
                imageAnimation: NgxGalleryAnimation.Slide
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];
 
        this.galleryImages = [
            
               {
                "small": "http://www.kathua.nic.in/images/brugges2006/1.jpg",
                "medium": "http://www.kathua.nic.in/images/brugges2006/1.jpg",
                "big": "http://www.kathua.nic.in/images/brugges2006/1.jpg"},
               {
                "small": "http://www.kathua.nic.in/images/brugges2006/2.jpg","medium": "http://www.kathua.nic.in/images/brugges2006/2.jpg","big": "http://www.kathua.nic.in/images/brugges2006/2.jpg", },
               {
                "small": "http://www.kathua.nic.in/images/brugges2006/3.jpg","medium": "http://www.kathua.nic.in/images/brugges2006/3.jpg","big": "http://www.kathua.nic.in/images/brugges2006/3.jpg", },
               {
                "small": "http://www.kathua.nic.in/images/brugges2006/4.jpg","medium": "http://www.kathua.nic.in/images/brugges2006/4.jpg","big": "http://www.kathua.nic.in/images/brugges2006/4.jpg", },
               {
                "small": "http://www.kathua.nic.in/images/brugges2006/5.jpg","medium": "http://www.kathua.nic.in/images/brugges2006/5.jpg","big": "http://www.kathua.nic.in/images/brugges2006/5.jpg", },
               {
                "small": "http://www.kathua.nic.in/images/brugges2006/6.jpg","medium": "http://www.kathua.nic.in/images/brugges2006/6.jpg","big": "http://www.kathua.nic.in/images/brugges2006/6.jpg", },
               {
                "small": "http://www.kathua.nic.in/images/brugges2006/9.jpg","medium": "http://www.kathua.nic.in/images/brugges2006/9.jpg","big": "http://www.kathua.nic.in/images/brugges2006/9.jpg", },
               {
                "small": "http://i1378.photobucket.com/albums/ah93/mykathua/IMGP1668_zpsm7qp4uup.jpg","medium": "http://i1378.photobucket.com/albums/ah93/mykathua/IMGP1668_zpsm7qp4uup.jpg","big": "http://i1378.photobucket.com/albums/ah93/mykathua/IMGP1668_zpsm7qp4uup.jpg", },
               {
                "small": "http://i1378.photobucket.com/albums/ah93/mykathua/Thein-Dam_zpsx4djhwa4.jpg","medium": "http://i1378.photobucket.com/albums/ah93/mykathua/Thein-Dam_zpsx4djhwa4.jpg","big": "http://i1378.photobucket.com/albums/ah93/mykathua/Thein-Dam_zpsx4djhwa4.jpg", },
               {
                "small": "http://i1378.photobucket.com/albums/ah93/mykathua/db04046a-2197-4972-a0f3-acbca0a72bd1_zpsferpg4po.jpg","medium": "http://i1378.photobucket.com/albums/ah93/mykathua/db04046a-2197-4972-a0f3-acbca0a72bd1_zpsferpg4po.jpg","big": "http://i1378.photobucket.com/albums/ah93/mykathua/db04046a-2197-4972-a0f3-acbca0a72bd1_zpsferpg4po.jpg", },
               {
                "small": "http://i1378.photobucket.com/albums/ah93/mykathua/Thein-Dam-4_zps3xfxwfkz.jpg","medium": "http://i1378.photobucket.com/albums/ah93/mykathua/Thein-Dam-4_zps3xfxwfkz.jpg","big": "http://i1378.photobucket.com/albums/ah93/mykathua/Thein-Dam-4_zps3xfxwfkz.jpg", },
               {
                "small": "http://i1378.photobucket.com/albums/ah93/mykathua/Thein-Dam-5_zpsdilijcja.jpg","medium": "http://i1378.photobucket.com/albums/ah93/mykathua/Thein-Dam-5_zpsdilijcja.jpg","big": "http://i1378.photobucket.com/albums/ah93/mykathua/Thein-Dam-5_zpsdilijcja.jpg", },
        ];
    }

}
