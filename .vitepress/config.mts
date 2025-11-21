import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  
  title: "FuncGodot Manual",
  description: "An Interpreter for Quake MAP files in Godot",
  ignoreDeadLinks: true,
  themeConfig: {
    outline: {
      level: [2, 5]
    },
    search: {
      provider: 'local',
      options: {
          detailedView: true,
      },
    },
    nav: [
      // { text: 'Home', link: '/' },
      // { text: 'What is FuncGodot?', link: '/start' }
    ],
    sidebar: [
      {
        text: '',
        items: [
          { text: 'What is FuncGodot?', link: '/start' },
        ]
      },
      {
        text: 'Getting Started',
        items: [
          { text: 'Installation', link: '/guides/installing' },
          { text: 'Project Configuration', link: '/guides/project_config' },
          { text: 'Forge Game Data', link: '/guides/forge_game_data' },
          { text: 'Textures', link: '/guides/textures' },
          { text: 'Map Editor Configuration', link: '/guides/map_editor_config' },
        ]
      },
      {
        text: 'Entity Key Value Pairs',
        items: [
          { text: 'What are Key Value Pairs?', link: '/refs/ref_key_value_pairs' },
          { text: 'Applying Key Values', link: '/refs/ref_applying_key_values' },
          { text: 'Property Types', link: '/refs/ref_property_types' },
          { text: 'Choices', link: '/refs/ref_choices' },
          { text: 'Bit Flags', link: '/refs/ref_bitflags' },
          { text: 'Build Stage Properties', link: '/refs/ref_build_stage_properties' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/func-godot' }
    ]
  }
})
