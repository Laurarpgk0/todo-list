import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from "../../theme";
import { TaskDTO } from "../../dtos/TaskDTO";

type taskProps = TaskDTO & {
    onTaskDone: (id: string) => void
    onTaskDelete: (id: string) => void
}

export function Task({ id, title, isCompleted, onTaskDone, onTaskDelete }: taskProps) {
    return <View style={styles.taskContainer}>
        <TouchableOpacity onPress={() => onTaskDone(id)}>
            <MaterialCommunityIcons
                name={
                    isCompleted
                        ? "checkbox-marked-circle-outline"
                        : 'checkbox-blank-circle-outline'}
                size={22}
                color={
                    isCompleted
                        ? theme.colors.brand.purple
                        : theme.colors.brand.blue}
            />
        </TouchableOpacity>

        <View style={styles.textContainer}>
            <Text style={isCompleted ? styles.textDone : styles.textCreated}>{title}</Text>
        </View>

        <TouchableOpacity onPress={() => onTaskDelete(id)}>
            <MaterialCommunityIcons
                name="trash-can-outline"
                size={20}
                color={theme.colors.base.gray300}
            />
        </TouchableOpacity>
    </View>

}