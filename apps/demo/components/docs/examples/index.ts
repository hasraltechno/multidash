// Registry of live examples. The docs read each file's source to show it in the "Code" tab.
import type { ComponentType } from "react"

import AvatarBasic from "./avatar/basic"
import AvatarGroup from "./avatar/group"
import BadgeVariants from "./badge/variants"
import BadgeWithIcon from "./badge/with-icon"
import ButtonVariants from "./button/variants"
import ButtonSizes from "./button/sizes"
import ButtonWithIcon from "./button/with-icon"
import ButtonAsLink from "./button/as-link"
import CardBasic from "./card/basic"
import CardWithAction from "./card/with-action"
import CheckboxBasic from "./checkbox/basic"
import DropdownMenuBasic from "./dropdown-menu/basic"
import DropdownMenuRadioGroup from "./dropdown-menu/radio-group"
import InputBasic from "./input/basic"
import InputWithIcon from "./input/with-icon"
import InputStates from "./input/states"
import LabelBasic from "./label/basic"
import NativeSelectBasic from "./native-select/basic"
import ProgressBasic from "./progress/basic"
import ProgressCustomColor from "./progress/custom-color"
import SeparatorBasic from "./separator/basic"
import SheetBasic from "./sheet/basic"
import SheetSides from "./sheet/sides"
import SkeletonBasic from "./skeleton/basic"
import SkeletonCard from "./skeleton/card"
import SwitchBasic from "./switch/basic"
import TableBasic from "./table/basic"
import TabsBasic from "./tabs/basic"
import TextareaBasic from "./textarea/basic"
import TooltipBasic from "./tooltip/basic"
import TypographyH1 from "./typography/h1"
import TypographyH2 from "./typography/h2"
import TypographyH3 from "./typography/h3"
import TypographyH4 from "./typography/h4"
import TypographyP from "./typography/p"
import TypographyLead from "./typography/lead"
import TypographyLargeSmallMuted from "./typography/large-small-muted"
import TypographyBlockquote from "./typography/blockquote"
import TypographyList from "./typography/list"
import TypographyInlineCode from "./typography/inline-code"
import TypographyLink from "./typography/link"

export const examples: Record<string, ComponentType> = {
  "avatar/basic": AvatarBasic,
  "avatar/group": AvatarGroup,
  "badge/variants": BadgeVariants,
  "badge/with-icon": BadgeWithIcon,
  "button/variants": ButtonVariants,
  "button/sizes": ButtonSizes,
  "button/with-icon": ButtonWithIcon,
  "button/as-link": ButtonAsLink,
  "card/basic": CardBasic,
  "card/with-action": CardWithAction,
  "checkbox/basic": CheckboxBasic,
  "dropdown-menu/basic": DropdownMenuBasic,
  "dropdown-menu/radio-group": DropdownMenuRadioGroup,
  "input/basic": InputBasic,
  "input/with-icon": InputWithIcon,
  "input/states": InputStates,
  "label/basic": LabelBasic,
  "native-select/basic": NativeSelectBasic,
  "progress/basic": ProgressBasic,
  "progress/custom-color": ProgressCustomColor,
  "separator/basic": SeparatorBasic,
  "sheet/basic": SheetBasic,
  "sheet/sides": SheetSides,
  "skeleton/basic": SkeletonBasic,
  "skeleton/card": SkeletonCard,
  "switch/basic": SwitchBasic,
  "table/basic": TableBasic,
  "tabs/basic": TabsBasic,
  "textarea/basic": TextareaBasic,
  "tooltip/basic": TooltipBasic,
  "typography/h1": TypographyH1,
  "typography/h2": TypographyH2,
  "typography/h3": TypographyH3,
  "typography/h4": TypographyH4,
  "typography/p": TypographyP,
  "typography/lead": TypographyLead,
  "typography/large-small-muted": TypographyLargeSmallMuted,
  "typography/blockquote": TypographyBlockquote,
  "typography/list": TypographyList,
  "typography/inline-code": TypographyInlineCode,
  "typography/link": TypographyLink,
}
