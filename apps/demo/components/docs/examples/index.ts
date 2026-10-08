// Registry of live examples. The docs read each file's source to show it in the "Code" tab.
import type { ComponentType } from "react"

import AccordionBasic from "./accordion/basic"
import AccordionMultiple from "./accordion/multiple"
import AlertBasic from "./alert/basic"
import AlertVariants from "./alert/variants"
import AvatarBasic from "./avatar/basic"
import AvatarGroup from "./avatar/group"
import BadgeVariants from "./badge/variants"
import BadgeWithIcon from "./badge/with-icon"
import ButtonAsLink from "./button/as-link"
import ButtonSizes from "./button/sizes"
import ButtonVariants from "./button/variants"
import ButtonWithIcon from "./button/with-icon"
import CardBasic from "./card/basic"
import CardWithAction from "./card/with-action"
import CheckboxBasic from "./checkbox/basic"
import DataTableAdvanced from "./data-table/advanced"
import DataTableBasic from "./data-table/basic"
import DialogBasic from "./dialog/basic"
import DialogConfirm from "./dialog/confirm"
import DropdownMenuBasic from "./dropdown-menu/basic"
import DropdownMenuRadioGroup from "./dropdown-menu/radio-group"
import InputBasic from "./input/basic"
import InputStates from "./input/states"
import InputWithIcon from "./input/with-icon"
import LabelBasic from "./label/basic"
import NativeSelectBasic from "./native-select/basic"
import PopoverBasic from "./popover/basic"
import PopoverShare from "./popover/share"
import ProgressBasic from "./progress/basic"
import ProgressCustomColor from "./progress/custom-color"
import SelectBasic from "./select/basic"
import SelectGroups from "./select/groups"
import SeparatorBasic from "./separator/basic"
import SheetBasic from "./sheet/basic"
import SheetSides from "./sheet/sides"
import SkeletonBasic from "./skeleton/basic"
import SkeletonCard from "./skeleton/card"
import SwitchBasic from "./switch/basic"
import TableBasic from "./table/basic"
import TablesStandard from "./tables/standard"
import TabsBasic from "./tabs/basic"
import TextareaBasic from "./textarea/basic"
import ToastBasic from "./toast/basic"
import ToastTypes from "./toast/types"
import TooltipBasic from "./tooltip/basic"
import TypographyBlockquote from "./typography/blockquote"
import TypographyH1 from "./typography/h1"
import TypographyH2 from "./typography/h2"
import TypographyH3 from "./typography/h3"
import TypographyH4 from "./typography/h4"
import TypographyInlineCode from "./typography/inline-code"
import TypographyLargeSmallMuted from "./typography/large-small-muted"
import TypographyLead from "./typography/lead"
import TypographyLink from "./typography/link"
import TypographyList from "./typography/list"
import TypographyP from "./typography/p"

export const examples: Record<string, ComponentType> = {
  "accordion/basic": AccordionBasic,
  "accordion/multiple": AccordionMultiple,
  "alert/basic": AlertBasic,
  "alert/variants": AlertVariants,
  "avatar/basic": AvatarBasic,
  "avatar/group": AvatarGroup,
  "badge/variants": BadgeVariants,
  "badge/with-icon": BadgeWithIcon,
  "button/as-link": ButtonAsLink,
  "button/sizes": ButtonSizes,
  "button/variants": ButtonVariants,
  "button/with-icon": ButtonWithIcon,
  "card/basic": CardBasic,
  "card/with-action": CardWithAction,
  "checkbox/basic": CheckboxBasic,
  "data-table/advanced": DataTableAdvanced,
  "data-table/basic": DataTableBasic,
  "dialog/basic": DialogBasic,
  "dialog/confirm": DialogConfirm,
  "dropdown-menu/basic": DropdownMenuBasic,
  "dropdown-menu/radio-group": DropdownMenuRadioGroup,
  "input/basic": InputBasic,
  "input/states": InputStates,
  "input/with-icon": InputWithIcon,
  "label/basic": LabelBasic,
  "native-select/basic": NativeSelectBasic,
  "popover/basic": PopoverBasic,
  "popover/share": PopoverShare,
  "progress/basic": ProgressBasic,
  "progress/custom-color": ProgressCustomColor,
  "select/basic": SelectBasic,
  "select/groups": SelectGroups,
  "separator/basic": SeparatorBasic,
  "sheet/basic": SheetBasic,
  "sheet/sides": SheetSides,
  "skeleton/basic": SkeletonBasic,
  "skeleton/card": SkeletonCard,
  "switch/basic": SwitchBasic,
  "table/basic": TableBasic,
  "tables/standard": TablesStandard,
  "tabs/basic": TabsBasic,
  "textarea/basic": TextareaBasic,
  "toast/basic": ToastBasic,
  "toast/types": ToastTypes,
  "tooltip/basic": TooltipBasic,
  "typography/blockquote": TypographyBlockquote,
  "typography/h1": TypographyH1,
  "typography/h2": TypographyH2,
  "typography/h3": TypographyH3,
  "typography/h4": TypographyH4,
  "typography/inline-code": TypographyInlineCode,
  "typography/large-small-muted": TypographyLargeSmallMuted,
  "typography/lead": TypographyLead,
  "typography/link": TypographyLink,
  "typography/list": TypographyList,
  "typography/p": TypographyP,
}
