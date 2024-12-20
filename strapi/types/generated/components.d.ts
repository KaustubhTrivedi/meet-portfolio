import type { Schema, Struct } from '@strapi/strapi';

export interface ExploremyworkExploreMyWork extends Struct.ComponentSchema {
  collectionName: 'components_exploremywork_explore_my_works';
  info: {
    displayName: 'Explore my work';
    icon: 'apps';
  };
  attributes: {
    cta_link: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    tag: Schema.Attribute.Enumeration<
      ['UI/UX', 'Interface Design', 'Product design', 'UX Research']
    >;
    title: Schema.Attribute.String;
  };
}

export interface LetsconnectLetsConnect extends Struct.ComponentSchema {
  collectionName: 'components_letsconnect_lets_connects';
  info: {
    displayName: 'Lets Connect';
    icon: 'wheelchair';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
  };
}

export interface SkillsSkills extends Struct.ComponentSchema {
  collectionName: 'components_skills_skills';
  info: {
    description: '';
    displayName: 'Skills';
    icon: 'stack';
  };
  attributes: {
    skill_name: Schema.Attribute.String;
  };
}

export interface ToolsiuseToolsIUse extends Struct.ComponentSchema {
  collectionName: 'components_toolsiuse_tools_i_uses';
  info: {
    displayName: 'Tools I use';
    icon: 'paint';
  };
  attributes: {
    link: Schema.Attribute.String;
    tool_icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'exploremywork.explore-my-work': ExploremyworkExploreMyWork;
      'letsconnect.lets-connect': LetsconnectLetsConnect;
      'skills.skills': SkillsSkills;
      'toolsiuse.tools-i-use': ToolsiuseToolsIUse;
    }
  }
}
