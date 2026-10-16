import { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Button,
    FlatList,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface PostsData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function RNetworkingApp() {
  const [postList, setPostList] = useState<PostsData[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");

  //   Post
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  const fetchData = async (limit: number = 10) => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`,
      );

      const data = await res.json();
      setPostList(data);
      setIsLoading(false);
      setError("");
    } catch (err: any) {
      setError("Failed to post data");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData(20);
    setRefreshing(false);
  };

  const handlePost = async () => {
    try {
      setIsPosting(true);

      const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          title: postTitle,
          body: postBody,
        }),
      });

      const newPost = await res.json();
      setPostList((postList) => [newPost, ...postList]);

      setPostTitle("");
      setPostBody("");
      setIsPosting(false);
      setError("");
    } catch (err: any) {
      setError("Failed to post data");
    } finally {
      setIsPosting(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="000ff" />
        <Text>Loading....</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : (
        <>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Post title"
              value={postTitle}
              onChangeText={setPostTitle}
            />
            <TextInput
              style={styles.input}
              placeholder="Post body"
              value={postBody}
              onChangeText={setPostBody}
            />
            <Button
              title={isPosting ? "Posting...." : "Add Post"}
              onPress={handlePost}
              disabled={isPosting}
            />
          </View>

          <View style={styles.listContainer}>
            <FlatList
              data={postList}
              renderItem={({ item }) => {
                return (
                  <View style={styles.card}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.body}>{item.body}</Text>
                  </View>
                );
              }}
              ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
              ListEmptyComponent={
                <Text style={styles.title}>Post List Empty</Text>
              }
              ListHeaderComponent={
                <Text style={styles.headeText}>Post List</Text>
              }
              ListFooterComponent={
                <Text style={styles.footerText}>End of list</Text>
              }
              refreshing={refreshing}
              onRefresh={handleRefresh}
            ></FlatList>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f",
    // paddingTop: StatusBar.currentHeight,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  body: {
    fontSize: 16,
    color: "#666",
    marginTop: 8,
  },
  headeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
    textAlign: "center",
  },
  footerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
    textAlign: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
  },
  inputContainer: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 4,
    marginBottom: 8,
    fontSize: 16,
  },
  errorContainer: {
    padding: 16,
  },
  errorText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});
