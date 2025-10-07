import type { Schema, Struct } from '@strapi/strapi';

export interface BrickImage extends Struct.ComponentSchema {
  collectionName: 'components_brick_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface BrickLinkcard extends Struct.ComponentSchema {
  collectionName: 'components_brick_linkcards';
  info: {
    description: '';
    displayName: 'Link Card';
    icon: 'cursor';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    text: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BrickQuote extends Struct.ComponentSchema {
  collectionName: 'components_brick_quotes';
  info: {
    displayName: 'Quote';
    icon: 'quote';
  };
  attributes: {
    author: Schema.Attribute.String;
    text: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface PageAlert extends Struct.ComponentSchema {
  collectionName: 'components_page_alerts';
  info: {
    displayName: 'Alert';
    icon: 'bell';
  };
  attributes: {
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.Required;
    text: Schema.Attribute.Blocks & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<['error', 'info', 'success', 'warn']> &
      Schema.Attribute.Required;
  };
}

export interface PageBanner extends Struct.ComponentSchema {
  collectionName: 'components_page_banners';
  info: {
    description: '';
    displayName: 'Banner';
    icon: 'lightbulb';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    subTitle: Schema.Attribute.String;
    textColor: Schema.Attribute.Enumeration<['black', 'white']> &
      Schema.Attribute.DefaultTo<'black'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<['small', 'big']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'small'>;
  };
}

export interface PageDivider extends Struct.ComponentSchema {
  collectionName: 'components_page_dividers';
  info: {
    displayName: 'Divider';
    icon: 'arrowDown';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<['arrow', 'map', 'map_pin', 'shoe']>;
  };
}

export interface PageImagescmp extends Struct.ComponentSchema {
  collectionName: 'components_page_imagescmps';
  info: {
    description: '';
    displayName: 'Images Component';
    icon: 'picture';
  };
  attributes: {
    images: Schema.Attribute.Component<'brick.image', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 1;
        },
        number
      >;
  };
}

export interface PageImgtxt extends Struct.ComponentSchema {
  collectionName: 'components_page_imgtxts';
  info: {
    description: '';
    displayName: 'Image Text';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    imgPosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    moreText: Schema.Attribute.Blocks;
    perex: Schema.Attribute.Blocks & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface PageSeo extends Struct.ComponentSchema {
  collectionName: 'components_page_seos';
  info: {
    displayName: 'Seo';
    icon: 'crown';
  };
  attributes: {
    description: Schema.Attribute.String;
    ogDescription: Schema.Attribute.String;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'brick.image': BrickImage;
      'brick.linkcard': BrickLinkcard;
      'brick.quote': BrickQuote;
      'page.alert': PageAlert;
      'page.banner': PageBanner;
      'page.divider': PageDivider;
      'page.imagescmp': PageImagescmp;
      'page.imgtxt': PageImgtxt;
      'page.seo': PageSeo;
    }
  }
}
